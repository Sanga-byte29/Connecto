import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';
import { searchPosts } from '@/lib/appwrite/api';

type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({isSearchFetching, searchedPosts} : SearchResultsProps) => {
    if(isSearchFetching) {
        return <Loader />
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
        if(searchedPosts && searchedPosts.documents.length > 0){
            return (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
                <GridPostList posts={searchPosts.documents} />
            )
        }
    }
  return (
    <p className="text-light-4 mt-10 text-center w-full">No Results Found</p>
  )
}

export default SearchResults