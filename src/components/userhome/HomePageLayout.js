import * as React from 'react';
import { LoggedInUserPageLayout } from '@/components/common/Layout';
import DashboardMain from '../dashboard/DashboardMain';

export default function Home() {
    return(
        <LoggedInUserPageLayout>
            <DashboardMain/>
        </LoggedInUserPageLayout>
    );
}
