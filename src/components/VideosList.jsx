import '../CSS/Post.css'
import Pagin from './Pagin';

const VideosList = ({ page, posts, currentPost, loading, postsPerPage, paginate, currentPage }) => {
    if (loading) {
        return <h2>loading</h2>
    }

    return (<div className='div-main'>
        <Pagin page={page} postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
        {currentPost.map((video) => (
            <div key={video.id} className='div-post'>
                <h2>{video.title}</h2>
                <div>
                    <h3>Added by:</h3>
                    <p>{video.username}</p>
                </div>
                <iframe width="90%" height="300px" src={`${video.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
        ))}
        <Pagin page={page} postsPerPage={postsPerPage} TotalPosts={posts.length} paginate={paginate} currentPage={currentPage} />
    </div>)
}

export default VideosList;