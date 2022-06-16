import { number } from '@recoiljs/refine'
import { atom } from 'recoil'
import { syncEffect } from 'recoil-sync'

export const userCounter = atom<number>({
  key: 'userCounter',
  default: 0,
  effects: [
    syncEffect({ refine: number() }),
  ],
})