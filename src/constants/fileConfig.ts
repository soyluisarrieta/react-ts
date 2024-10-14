export type FileConfig = {
  MAX_SIZE: number
  VALID_EXTENSIONS: Record<string, readonly string[]>
  ACCEPTED_IMAGES: string
}

export const FILE_CONFIG = {
  MAX_SIZE: 102400 * 7, // 700KB
  VALID_EXTENSIONS: {
    IMAGES: ['jpg', 'jpeg', 'png', 'webp'],
    DOCS: ['pdf', 'docx']
  } as const  
}
