import React from 'react';
import { Box, Flex, Stack, SvgIcon, Typography } from '../components';
import { Layout } from './parts/Layout';
import { AttachmentPin } from '../components/icons';
import { css } from '@emotion/css';
import { MdOutlineAttachFile } from 'react-icons/md';

const textWithIcon = css`
  display: inline-flex;
  gap: 8px;
  align-items: center;
`;

export const Page: React.FC = () => {
  return (
    <Layout>
      <Flex mt={3}>
        <Box flexBasis="50%">
          <Typography variant="h4" className={textWithIcon}>
            <SvgIcon Icon={AttachmentPin} color="inherit" />
            自前のアイコン
          </Typography>
          <Stack spacing={2}>
            <SvgIcon Icon={AttachmentPin} fontSize="sm" color="action" />
            <SvgIcon Icon={AttachmentPin} fontSize="sm" color="disabled" />
            <SvgIcon Icon={AttachmentPin} fontSize="md" color="primary" />
            <SvgIcon Icon={AttachmentPin} fontSize="md" color="secondary" />
            <SvgIcon Icon={AttachmentPin} fontSize="lg" color="error" />
            <SvgIcon Icon={AttachmentPin} fontSize="lg" color="info" />
            <SvgIcon Icon={AttachmentPin} fontSize="lg" color="success" />
          </Stack>
        </Box>
        <Box flexBasis="50%">
          <Typography variant="h4" className={textWithIcon}>
            <SvgIcon Icon={MdOutlineAttachFile} color="inherit" />
            react-icons
          </Typography>
          <Stack spacing={2}>
            <SvgIcon Icon={MdOutlineAttachFile} fontSize="sm" color="action" />
            <SvgIcon Icon={MdOutlineAttachFile} fontSize="sm" color="disabled" />
            <SvgIcon Icon={MdOutlineAttachFile} fontSize="md" color="primary" />
            <SvgIcon Icon={MdOutlineAttachFile} fontSize="md" color="secondary" />
            <SvgIcon Icon={MdOutlineAttachFile} fontSize="lg" color="error" />
            <SvgIcon Icon={MdOutlineAttachFile} fontSize="lg" color="info" />
            <SvgIcon Icon={MdOutlineAttachFile} fontSize="lg" color="success" />
          </Stack>
        </Box>
      </Flex>
    </Layout>
  );
};
