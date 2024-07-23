import {IStoryDetail} from 'app/types/Story';
import {AxiosPromise} from 'axios';
import http from './http-common';

export default class StoryService {
  getStory(payload: {type: string}): AxiosPromise<number[]> {
    return http.get<any>(`/${payload.type}.json`);
  }
  getDetailStory(payload: {storyId: number}): AxiosPromise<IStoryDetail> {
    return http.get<any>(`/item/${payload.storyId}.json?print=pretty`);
  }
}
