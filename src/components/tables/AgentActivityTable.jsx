import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const activityData = [
  { 
    id: 1, 
    agent: 'Demand Agent', 
    action: 'Updated forecast for SKU-1234', 
    timestamp: '10:23 AM', 
    status: 'completed'
  },
  { 
    id: 2, 
    agent: 'Store Agent', 
    action: 'Requested restock for Store B', 
    timestamp: '10:15 AM', 
    status: 'pending'
  },
  { 
    id: 3, 
    agent: 'Warehouse Agent', 
    action: 'Allocated inventory for Store B', 
    timestamp: '10:12 AM', 
    status: 'completed'
  },
  { 
    id: 4, 
    agent: 'Pricing Agent', 
    action: 'Adjusted price for SKU-5678', 
    timestamp: '10:08 AM', 
    status: 'completed'
  },
  { 
    id: 5, 
    agent: 'Supplier Agent', 
    action: 'Confirmed order #98745', 
    timestamp: '10:01 AM', 
    status: 'completed'
  },
];

const AgentActivityTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Agent</TableHead>
          <TableHead>Action</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {activityData.map((activity) => (
          <TableRow key={activity.id}>
            <TableCell className="font-medium">{activity.agent}</TableCell>
            <TableCell>{activity.action}</TableCell>
            <TableCell>{activity.timestamp}</TableCell>
            <TableCell>
              <Badge variant={activity.status === 'completed' ? 'default' : 'outline'}>
                {activity.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AgentActivityTable;