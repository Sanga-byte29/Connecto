import Loader from '@/components/shared/Loader';
import PostCard from '@/components/shared/PostCard';
import { useGetRecentPosts } from '@/lib/react-query/queriesAndMutations';
import { Models } from 'appwrite';

const Home = () => {
   
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {data: posts, isPending: isPostLoading, isError: isErrorPosts} = useGetRecentPosts()

  return (
     <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Feed
          </h2>
          {
            isPostLoading && !posts ? (
              <Loader />
            ):(
              <ul className="flex flex-col flex-1 gap-9 w-full">
                {
                  posts?.documents.map((post: Models.Document) => (
                     <PostCard post={post} />
                  ))
                }
              </ul>
            )
          }
        </div>
      </div>
      <div className="home-creators">
        <h3 className="bold text-light-1">Top Creators</h3>
        
      </div>
     </div>
  )
}

export default Home