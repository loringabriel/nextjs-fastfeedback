import Head from 'next/head';
import { Button, Flex, Text, Code, Icon } from '@chakra-ui/react';

import { useAuth } from 'lib/auth';
import EmptyState from 'components/EmptyState';
import FreePlanEmptyState from 'components/FreePlanEmptyState';
import SiteTableSkeleton from 'components/SiteTableSkeleton';
import SiteTable from 'components/SiteTable';
import DashboardShell from 'components/DashboardShell';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

const Dashboard = () => {
    const { user } = useAuth();
    const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      {data.sites && data.sites.length > 0 ? (
        <SiteTable sites={data.sites} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};

export default Dashboard;
