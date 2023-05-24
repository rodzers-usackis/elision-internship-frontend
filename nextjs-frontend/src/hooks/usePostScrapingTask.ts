import {useMutation, UseMutationOptions} from "@tanstack/react-query";
import {ScrapingTask} from "../model/ScrapingTask";
import {postScrapingTask} from "../services/api/scrapingTasks";

export function usePostScrapingTask(){

    const {
        isLoading: isPostScrapingTaskLoading,
        isError: isPostScrapingTaskError,
        data: postScrapingTaskData,
        mutateAsync: postScrapingTaskMutation
    } = useMutation<null, Error, ScrapingTask>({
        mutationFn: postScrapingTask
    } as UseMutationOptions<null, Error, ScrapingTask>);

    return {isPostScrapingTaskLoading, isPostScrapingTaskError, postScrapingTaskData, postScrapingTaskMutation}

}