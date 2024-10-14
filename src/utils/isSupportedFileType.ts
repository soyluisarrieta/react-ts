import { FILE_CONFIG } from '@/constants'

type fileType = keyof typeof FILE_CONFIG['VALID_EXTENSIONS']

export function isSupportedFileType (fileName: string, fileType: fileType): boolean {
  const validExts = [...FILE_CONFIG.VALID_EXTENSIONS[fileType]]
  const fileExt = (fileName.split('.').pop() ?? '').toLowerCase() 
  return validExts.includes(fileExt as 'jpg')
}
