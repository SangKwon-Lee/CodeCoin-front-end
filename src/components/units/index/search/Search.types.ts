export interface ISearchProps{
    postModalOpen: boolean,
  handlePostModal: () => void,
  handleSearchWord: (e: React.ChangeEvent<HTMLInputElement>) => void,

}