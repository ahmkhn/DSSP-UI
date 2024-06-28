import { Chip } from 'primereact/chip';
export default function UserInfo({userName}) {
    return(
        <>
            <div>
                <Chip label={userName} image='../public/ali.jpeg'>

                </Chip>
            </div>
            
        </>
    );


}