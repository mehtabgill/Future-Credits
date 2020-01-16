import React from 'react' ;
import ProjectPost from './ProjectPost/ProjectPost';

const ProjectPosts = (props) => {

    let posts = props.posts.map((post, index)=> {
        return(
            <ProjectPost
                title = {post.title}
                descprtion = {post.descprtion}
                key = {post.id}
            />
        );
    })
    return (
        <section>
            {posts}
        </section>
    );
}

export default ProjectPosts ; 