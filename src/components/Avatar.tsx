import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    );
}

// import React from 'react';
// import styles from './Avatar.module.css';

// interface AvatarProps extends React.HTMLProps<HTMLImageElement> {
//     hasBorder: boolean;
//     src: string;
//     alt: string;
// }

// OU

// type AvatarProps = {
//     hasBorder: boolean;
//     src: string;
//     alt: string;
// } & React.HTMLProps<HTMLImageElement>

// export function Avatar({ hasBorder = true, src, ...props }: AvatarProps) {
//     return (
//         <img 
//             // {...props}
//             className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
//             src={src} 
//             alt={alt}
//         />
//     );
// }