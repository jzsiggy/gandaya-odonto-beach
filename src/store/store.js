import create from 'zustand'

const useStore = create(set => ({
  user: null,
  setUser: (user) => set(state => ({ user })),
  dropUser: () => set({ user: null })
}))

export default useStore;