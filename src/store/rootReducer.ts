import { combineSlices } from '@reduxjs/toolkit'
import studentListApi from '../api/studentListApi'

const rootReducer = combineSlices(studentListApi)

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
