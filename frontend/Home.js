import React, { useState } from 'react';
import { Box, Button, Text } from '@airtable/blocks/ui';

export function Home({ onNavigate }) {
    return (
        <Box padding={4}>
            <Text fontSize={4} marginBottom={4}>👋 Welcome to Aozora Community Information center</Text>
            <Button
                variant="primary"
                size="large"
                marginBottom={3}
                onClick={() => onNavigate('auto-update')}
            >
                Update Schedule
            </Button>
            <Button
                variant="default"
                size="large"
                onClick={() => onNavigate('add-student')}
            >
                Add Students
            </Button>
        </Box>
    );
}
