import { Title } from './NotFoundView.styled';
import { Link } from 'react-router-dom';

export default function NotFoundView() {
    return (
        <Title>404 This page could not be found!{' '}
            <Link to='/home'>Home page</Link>
        </Title>
    )
}