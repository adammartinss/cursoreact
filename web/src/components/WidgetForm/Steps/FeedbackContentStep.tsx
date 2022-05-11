import { FeedbackType, feedbackTypes } from "..";
import  CloseButton  from "../../CloseButton";
import {ArrowLeft} from 'phosphor-react'
interface FeedbackContentStepProps{
    feedbackType: FeedbackType
    onFeedbackRestartRequested: ()=>void
}
export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        
            <>
                <header>
                    <button
                        type="button"
                        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                        onClick={onFeedbackRestartRequested}
                    >
                        <ArrowLeft className="h-4 w-4 " weight="bold" />
                    </button>
                    <span className="text-xl leading-6 flex items-center gap-2 justify-center">
                        {feedbackTypeInfo.title}
                        <img
                            src={feedbackTypeInfo.image.source}
                            alt={feedbackTypeInfo.image.alt}
                            className="w-6 h-6"
                        />
                    </span>
                    <CloseButton />
                </header>
                <form className="my-4 w-full">
                    <textarea
                        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:ring-brand-500 focus:ring-2 resize-none
                        focus:outline-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                        placeholder="Conte-nos com detalhes o que está acontecendo..."
                    ></textarea>
                </form>
            
        </>
    );
}
