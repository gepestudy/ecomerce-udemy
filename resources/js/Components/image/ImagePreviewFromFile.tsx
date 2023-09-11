import {JSX, useMemo} from "react";
import {Image} from "@mantine/core";
import {FileWithPath} from "@mantine/dropzone";


export default function ImagePreviewFromFile(files: FileWithPath[]) {
     const previews = useMemo(()=>{
        return files.map((file) => {
            const imageUrl = URL.createObjectURL(file);
            return (
                <Image
                    key={imageUrl}
                    src={imageUrl}
                    imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                />
            );
        })
    },[files])

    return previews;
}
