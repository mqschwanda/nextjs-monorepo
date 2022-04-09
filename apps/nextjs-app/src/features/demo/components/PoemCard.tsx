import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';
import type { SearchPoems } from '@/backend/features/poem/SearchPoems';

type Poem = SearchPoems[0];

type Props = {
  poem: Poem;
  defaultImg?: string;
  children?: never;
};

export const PoemCard: FC<Props> = (props) => {
  const {
    poem: { image: img, content, author, title, keywords },
    defaultImg,
  } = props;
  const image = img ?? defaultImg;
  return (
    <Card>
      <CardHeader title={title} subheader={`By ${author}`} />
      <CardMedia component="img" src={image ?? ''} alt={title} />
      <CardContent>
        <Typography variant="caption">{content}</Typography>
      </CardContent>
      <CardActions>
        {keywords.map((keyword) => (
          <Chip color="primary" key={keyword} label={`#${keyword}`} />
        ))}
      </CardActions>
    </Card>
  );
};
