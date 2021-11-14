
import React from 'react';
import Link from 'next/link';

function BlogPost({blog}) {
    return (
        <div className="blogPost">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <img className="h-48 w-full object-cover"  src={blog.img} />  
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
              <p className="date">{blog.date}</p>
              <Link href={`/posts/${blog.slug}`}>
                <a className="text-lg font-semibold text-gray-900">{blog.title}</a>
              </Link>
              <p className="mt-3 text-base text-gray-500">{blog.description}</p>
             
              </div>
              </div>
              </div>
        </div>
    );
}

export default BlogPost;