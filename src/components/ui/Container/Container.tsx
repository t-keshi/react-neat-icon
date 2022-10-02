import { styled } from '../../../theme';
import { Container as MuiContianer } from '@mui/system';

export const Container = styled(MuiContianer)(({ theme }) => ({
  padding: theme.spacing(0, 3),
}));
