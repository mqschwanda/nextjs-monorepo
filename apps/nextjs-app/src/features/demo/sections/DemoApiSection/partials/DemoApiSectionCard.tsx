import type { PostQueryData } from '@mqs/graphql-client';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Skeleton,
  Typography,
} from '@mqs/ui-lib';
import type { FC } from 'react';

type Post = PostQueryData['posts'][0];

type DemoApiSectionCardProps = {
  post: Post;
};

export const DemoApiSectionCard: FC<DemoApiSectionCardProps> = ({ post }) => {
  const { title, content, image, author }: Post = post;

  return (
    <Card>
      <CardHeader
        title={title ?? <Skeleton />}
        subheader={
          author ? `By ${author.firstName} ${author.lastName}` : <Skeleton />
        }
      />
      {image ? (
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
    </Card>
  );
};
