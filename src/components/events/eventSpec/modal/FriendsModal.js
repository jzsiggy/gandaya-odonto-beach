import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import client from "../../../../assets/service/client";
import { Container, ErrorWrapper, ListItem, Modal, UserImage, X } from "./styles"

import Loader from '../../../../assets/components/loader/Loader';

const FriendsModal = (props) => {
    const getEventFriends = async () => {
        return client.get(`event/${props.eventId}/friends`)
        .then(res => {
            return(res.data.friends);
        })
    }

    const { isLoading, isError, data: friends, error } = useQuery('friends', getEventFriends, {retry: false});

    return (
        <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <X onClick={() => props.closeModal()}/>
            <Modal>
                {
                    isLoading ?
                    <Loader />
                    :
                    isError ?
                    <ErrorWrapper>
                        <span style={{width: '80%'}}>
                            ainda não é possível visualizar a lista de convidados
                        </span>
                        <div style={{
                                marginTop: "10%",
                                height: '200px',
                                width: '80%',
                                maxWidth: "350px",
                                backgroundImage: "url('https://i.imgur.com/boukn.gif')",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                        }} />
                    </ErrorWrapper>
                    :
                    friends &&
                    friends.map(friend => {
                        const imageUrl = `${process.env.REACT_APP_S3_URL}/${friend.profileImage.key}`
                        return (
                            <ListItem key={friend.id}>
                                <UserImage img={imageUrl} />
                                <span style={{margin: '0 10px'}}>{friend.firstName} {friend.lastName}</span>
                            </ListItem>
                        )
                    })
                }
            </Modal>
        </Container>
    )
}

export default FriendsModal