import { Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  TwitterShareButton, 
  FacebookShareButton, 
  LinkedinShareButton 
} from '@/components/ui/social-buttons'

interface ShareButtonProps {
  title: string
  description: string
  url: string
}

export const ShareButton = ({ title, description, url }: ShareButtonProps) => {
  return (
    <div className="inline-block relative">
      <Button
        variant="outline"
        className="flex items-center space-x-2"
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </Button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          <TwitterShareButton title={title} url={url} />
          <FacebookShareButton quote={description} url={url} />
          <LinkedinShareButton title={title} summary={description} url={url} />
        </div>
      </div>
    </div>
  )
}