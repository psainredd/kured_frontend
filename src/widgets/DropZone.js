import * as React from 'react'
import { DropzoneArea } from 'material-ui-dropzone';

export function DropZone({filesLimit=4, onChange, onDelete, ...props}) {
    return (
        <DropzoneArea
            showPreviews={true}
            showPreviewsInDropzone={false}
            previewGridProps={{container: { spacing: 0 , direction: 'row'}}}
            previewText="Selected files:"
            {...{filesLimit, onChange, onDelete, ...props}}
        />
    )
}