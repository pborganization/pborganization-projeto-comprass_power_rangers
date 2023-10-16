import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button ({children, onPress, disabled, ...rest}: ButtonProps){
  return (
    <Container onPress={onPress} activeOpacity={0.7} {...rest} disabled={disabled}>
      <Text weight="800" color="#FFF">
        {children}
      </Text>
    </Container>
  );
}
