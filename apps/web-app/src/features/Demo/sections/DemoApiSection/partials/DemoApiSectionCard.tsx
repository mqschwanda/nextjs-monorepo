import type { Poem } from '@mqs/db-main-prisma';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Skeleton,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';

type DemoApiSectionCardProps = {
  poem: Poem;
};

export const DemoApiSectionCard: FC<DemoApiSectionCardProps> = ({ poem }) => {
  const { keywords, author, title, content }: Poem = poem;
  const keywordURI = (keywords ?? [])
    .map((keyword) => encodeURIComponent(keyword))
    .join(',');
  const image = `https://source.unsplash.com/random/640x480?${keywordURI}`;

  return (
    <Card>
      <CardHeader
        title={title ?? <Skeleton />}
        subheader={author ? `By ${author}` : <Skeleton />}
      />
      {keywords ? (
        <CardMedia component="img" src={image} alt={title} />
      ) : (
        <Skeleton height="300px" width="100%" />
      )}
      <CardContent>
        <Typography variant="caption">
          {content ?? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        {keywords?.map((keyword) => (
          <Chip color="primary" key={keyword} label={`#${keyword}`} />
        ))}
      </CardActions>
    </Card>
  );
};
