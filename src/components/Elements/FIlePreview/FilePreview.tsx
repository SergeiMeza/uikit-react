import { DocumentIcon } from '@heroicons/react/outline'
import React, { useEffect } from 'react'
import { classNames } from '../../helpers/methods'

export type FilePreviewProps = {
  file: File
  type?: FilePreviewType
}

enum FilePreviewType {
  default = 'default',
  square = 'square',
  circle = 'circle',
}

const FilePreviewComponent: React.FC<FilePreviewProps> = ({
  file,
  type = FilePreviewType.default,
}) => {
  useEffect(() => {
    if (file.type.includes('image')) {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        document
          .getElementById(file.name)
          ?.setAttribute('src', String(e?.target?.result ?? ''))
      }
    } else if (file.type.includes('video')) {
      var media = URL.createObjectURL(file)
      var source: any = document.getElementById(file.name)
      var video: any = document.getElementById(`video-${file.name}`)
      source.src = media
      video.play()
    }
  }, [file])

  const imagePreviewClassNames = classNames(
    type === FilePreviewType.default ? 'w-auto max-w-lg rounded' : '',
    type === FilePreviewType.square ? 'w-32 h-32 rounded' : '',
    type === FilePreviewType.circle ? 'w-32 h-32 rounded-full' : '',
    'object-cover',
  )

  return (
    <div
      className={
        type === FilePreviewType.circle
          ? 'border border-gray-300 rounded-full'
          : 'border border-gray-300 rounded'
      }
    >
      {file.type.includes('image') ? (
        <img
          className={imagePreviewClassNames}
          src=""
          alt={file.name}
          id={file.name}
        />
      ) : file.type.includes('video') ? (
        <video id={`video-${file.name}`} width="320" height="240" controls>
          <source id={file.name} src={file.name} type={file.type} />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="flex flex-col items-center px-4 py-4">
          <DocumentIcon className="text-gray-600 h-8 w-8" />
          <span className="text-sm font-medium text-gray-900 mt-2">
            {file.name}
          </span>
        </div>
      )}
    </div>
  )
}

export const FilePreview = Object.assign(FilePreviewComponent, {
  type: FilePreviewType,
})

export default FilePreview
