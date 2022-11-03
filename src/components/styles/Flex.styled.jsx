import styled from 'styled-components';

const Flex = styled.div`
display: flex;
align-items: center;
gap: 2rem;
@media (max-width:${({theme}) => theme.responsive}) {
    flex-diection: column;
    text-align: center;

}

`;

export default Flex;
