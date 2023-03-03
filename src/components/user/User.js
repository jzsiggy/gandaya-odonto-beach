import { useQuery } from 'react-query'
import client from "../../assets/service/client";
import { Container, ProfilePicture } from "./styles";

import useStore from '../../store/store';
import Login from '../../assets/components/login/Login';
import { useRef } from 'react';
import useScript from '../../assets/hooks/useScript';

const User = () => {
    const user = useStore(state => state.user);
    const dropUser = useStore(state => state.dropUser);

    const getProfileImage = async () => {
        return await client.get(`user/${user.id}/profileImage`)
        .then(res => {
            return res.data.profileImage;
        })
        .catch(err => {
            return err;
        })
    }

    const getBalance = async () => {
        return await client.get(`user/${user.id}/balance`)
        .then(res => {
            return res.data.balance;
        })
        .catch(err => {
            return err;
        })
    }

    const compressAndSendImage = async (file) => {
        const MAX_WIDTH = 600;
        const MAX_HEIGHT = 600;
        const MIME_TYPE = "image/jpeg";
        const QUALITY = 1;

        function calculateSize(img, maxWidth, maxHeight) {
            let width = img.width;
            let height = img.height;
          
            // calculate the width and height, constraining the proportions
            if (width > height) {
                if (width > maxWidth) {
                    height = Math.round((height * maxWidth) / width);
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = Math.round((width * maxHeight) / height);
                    height = maxHeight;
                }
            }
            return [width, height];
        }

        const blobURL = URL.createObjectURL(file);
        const img = new Image();
        img.src = blobURL;
        img.onerror = function () {
            URL.revokeObjectURL(this.src);
            console.log("Cannot load image");
        };
        
        img.onload = function () {
            URL.revokeObjectURL(this.src);
            const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
            const canvas = document.createElement("canvas");
            canvas.width = newWidth;
            canvas.height = newHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, newWidth, newHeight);

            canvas.toBlob(
            async (blob) => {
                await sendProfileImage(blob)
            },
            MIME_TYPE,
            QUALITY
            );
        }
    }

    const openFileExplorer = () => {
        inputFile.current.click();
    }

    const sendProfileImage = async (file) => {
        const formData = new FormData();
        formData.append("image", file);

        let uploadImageResponse = await client({
            method: 'POST',
            url: `image/upload`, 
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            
        await client.post(`user/profileImage`, {
            profileImageId: uploadImageResponse.data.image.imageId
        })

        refetchProfileImage();
    }

    const setProfileImage = async (event) => {
        event.stopPropagation();
        event.preventDefault();

        var file = event.target.files[0];
        await compressAndSendImage(file);
    }

    const logout = () => {
		client.post('/auth/logout')
		.then(res => {
			dropUser();
		})
	}

    const { data: profileImage, refetch: refetchProfileImage } = useQuery('profileImage', getProfileImage, {enabled: !!user});
    const { data: balance, refetch: refetchBalance } = useQuery('balance', getBalance, {enabled: !!user});
    
    const inputFile = useRef(null);
    
    return (
        user ?
            <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <span style={{fontSize: "1.5em"}}>Welcome back, <b>{user.firstName}</b> 👋</span>
                <span style={{fontSize: "0.5em"}}>Toque na foto par alterar sua foto de perfil!</span>
                { profileImage?.key &&
                    <ProfilePicture onClick={openFileExplorer} img={`${process.env.REACT_APP_S3_URL}/${profileImage.key}`} />
                }
                <input type='file' id='file' ref={inputFile} onChange={setProfileImage} style={{display: 'none'}}/>
                <span>Balance: R$ <b style={{fontSize: "1.2em"}}>{balance && balance}</b></span>
                {/* <a href={`https://explorer.solana.com/address/${user.publicKey}/tokens?cluster=devnet`}>view on Solana</a> */}
                <span onClick={logout}>log out</span>
                <a style={{textDecoration: 'none', color: 'gray'}} href="https://docs.google.com/document/d/1xmScbJVBX7XdZ_PnaMr-ohc3hiwlp95n/edit?usp=sharing&ouid=103347698330643379839&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
            </Container>
        :
            <Login />
    )
}

export default User