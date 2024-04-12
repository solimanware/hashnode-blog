import react from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { PostFullFragment } from '../generated/graphql';

function DisqusComments({ post }: { post: PostFullFragment; }) {
  const config = {
    url: post.url,
    identifier: post.slug,
    title: post.title,
  };
  return (
    <div className="container mx-auto px-2 md:px-4 md:py-1 2xl:px-10">
      <DiscussionEmbed
        shortname="soliman-ai"
        config={config}
      />
    </div>
  );
}

export default DisqusComments;
