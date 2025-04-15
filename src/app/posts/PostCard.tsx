import Image from "next/image";
import { ThumbsUp, Share } from "lucide-react";

interface PostCardProps {
  imgSrc: string;
  title: string;
  short_description: string;
  author: string;
  likes: number;
  shares: number;
}

const PostCard: React.FC<PostCardProps> = (props: PostCardProps) => {
  return (
    <div className="container">
      <div className="flex flex-col m-2 p-4 border-1 border-gray-300 rounded-lg">
        <div className="w-full h-32 relative">
          <Image className="rounded-lg" src={props.imgSrc} fill={true} objectFit="cover" alt="Splash Image" />
        </div>
        <div className="w-full space-y-2 p-2 mt-4">
          <h1 className="text-xl font-bold text-gray-800">{props.title}</h1>
          <p className="text-base text-gray-700">{props.short_description}</p>
          <div className="flex flex-row justify-between">
            <p className="text-sm font-light text-gray-400">{props.author}</p>
            <div className="flex flex-row space-x-3 text-sm font-light text-gray-500">
              <div className="flex flex-row items-center space-x-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{props.likes}</span>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <Share className="w-4 h-4" />
                <span>{props.shares}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
