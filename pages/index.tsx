import React from 'react';
import { Header, Layout, Logo, Avatar } from '@/src/components';
import { Menubar, MenubarItem } from '@/src/components';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/components';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/src/components';
import { Badge } from '@/src/components';
import pagesData from '@/data/list-of-pages.data.json';

interface Page {
  id: number;
  header: string;
  sectionType: string;
  status: string;
  target: number;
  limit: number;
  reviewer: string | null;
}

export default function Home() {
  const getStatusBadge = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'done') {
      return <Badge status="done" />;
    } else if (statusLower.includes('process')) {
      return <Badge status="in progress" />;
    }
    return <Badge status="planned" />;
  };

  return (
    <>
      <Header
        left={<Logo variant="blank" />}
        middle={
          <Menubar variant="transparent">
            <MenubarItem>Products</MenubarItem>
            <MenubarItem active>Solutions</MenubarItem>
            <MenubarItem>Resources</MenubarItem>
            <MenubarItem>Company</MenubarItem>
          </Menubar>
        }
        right={<Avatar src="https://i.pravatar.cc/150" alt="User Avatar" size="small" />}
      />
      <Layout>
        <Tabs defaultValue="pages">
          <TabsList>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="pages">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Header</TableHead>
                  <TableHead>Section Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Target</TableHead>
                  <TableHead>Limit</TableHead>
                  <TableHead>Reviewer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {(pagesData.pages as Page[]).map((page) => (
                  <TableRow key={page.id}>
                    <TableCell>{page.header}</TableCell>
                    <TableCell>{page.sectionType}</TableCell>
                    <TableCell>{getStatusBadge(page.status)}</TableCell>
                    <TableCell>{page.target}</TableCell>
                    <TableCell>{page.limit}</TableCell>
                    <TableCell>{page.reviewer || 'Assign reviewer'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="settings">
            <p>Settings content will be here</p>
          </TabsContent>
        </Tabs>
      </Layout>
    </>
  );
}

