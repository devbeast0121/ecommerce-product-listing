import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
        };
    },
}));

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props) => {
        return <img alt={props.alt} src={props.src} {...props} />;
    },
}));