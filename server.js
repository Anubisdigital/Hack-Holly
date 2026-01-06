const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve main HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoints for simulation
app.post('/api/simulate/scan', (req, res) => {
    const simulationData = {
        status: 'scanning',
        message: 'Network scan initiated',
        progress: 20,
        details: {
            target: '192.168.1.100',
            ports: [22, 80, 443, 8080],
            vulnerabilities: ['CVE-2024-1234', 'CVE-2024-5678']
        },
        timestamp: new Date().toISOString()
    };
    res.json(simulationData);
});

app.post('/api/simulate/bypass', (req, res) => {
    const simulationData = {
        status: 'bypassing',
        message: 'Firewall bypass in progress',
        progress: 40,
        details: {
            method: 'SYN Flood Attack',
            success: true,
            duration: '2.4s',
            alertsBypassed: 15
        },
        timestamp: new Date().toISOString()
    };
    res.json(simulationData);
});

app.post('/api/simulate/crack', (req, res) => {
    const simulationData = {
        status: 'cracking',
        message: 'Encryption crack initiated',
        progress: 60,
        details: {
            algorithm: 'AES-256',
            attempts: 1250000,
            success: true,
            key: '0x7F3A9B2C...'
        },
        timestamp: new Date().toISOString()
    };
    res.json(simulationData);
});

app.post('/api/simulate/access', (req, res) => {
    const simulationData = {
        status: 'accessing',
        message: 'Mainframe access achieved',
        progress: 80,
        details: {
            accessLevel: 'ROOT',
            username: 'admin',
            privileges: ['ALL'],
            sessionId: 'SESS-7890-XYZ-456'
        },
        timestamp: new Date().toISOString()
    };
    res.json(simulationData);
});

app.post('/api/simulate/download', (req, res) => {
    const files = [
        {
            id: 'file_001',
            name: 'Project_Icarus_Blueprints.zip',
            size: '245MB',
            encrypted: true,
            checksum: 'a1b2c3d4e5'
        },
        {
            id: 'file_002',
            name: 'Financial_Records_2024.tar.gz',
            size: '189MB',
            encrypted: true,
            checksum: 'f6g7h8i9j0'
        },
        {
            id: 'file_003',
            name: 'CEO_Communications.enc',
            size: '78MB',
            encrypted: true,
            checksum: 'k1l2m3n4o5'
        },
        {
            id: 'file_004',
            name: 'Research_Data_Archive.iso',
            size: '512MB',
            encrypted: true,
            checksum: 'p6q7r8s9t0'
        },
        {
            id: 'file_005',
            name: 'Security_Protocols.db',
            size: '45MB',
            encrypted: true,
            checksum: 'u1v2w3x4y5'
        }
    ];

    const simulationData = {
        status: 'downloading',
        message: 'Secure data extraction in progress',
        progress: 90,
        details: {
            files,
            totalSize: '1.07GB',
            transferRate: '125MB/s',
            encryption: 'AES-256'
        },
        timestamp: new Date().toISOString()
    };
    res.json(simulationData);
});

app.post('/api/simulate/cover', (req, res) => {
    const simulationData = {
        status: 'covering',
        message: 'Trace removal protocol initiated',
        progress: 100,
        details: {
            logsDeleted: 142,
            timestampsAltered: 89,
            falseTrailCreated: true,
            cleanupComplete: true
        },
        timestamp: new Date().toISOString(),
        missionComplete: true
    };
    res.json(simulationData);
});

// Download endpoint
app.get('/api/download/:filename', (req, res) => {
    const { filename } = req.params;
    
    // Create simulated file content
    const fileContent = `CYBERSEC SIMULATION v2.0 - SIMULATED FILE DOWNLOAD

Filename: ${filename}
Download Time: ${new Date().toLocaleString()}
File Size: ${Math.floor(Math.random() * 500) + 100}MB
Encryption: AES-256 (Simulated)
Checksum: ${Math.random().toString(36).substring(2, 15).toUpperCase()}

===========================================
IMPORTANT NOTICE:
This is a simulated file download from the hacking simulation.
No real data has been accessed or compromised.

This simulation is for educational purposes only.
Unauthorized access to computer systems is illegal.
===========================================

File Contents (Simulated):
-------------------------
[CLASSIFIED DATA - SIMULATION ONLY]
Project: ${filename.split('.')[0]}
Status: Top Secret
Access Level: Restricted

Data Integrity: 100%
Encryption Status: Simulated
Verification: Simulation Complete

End of File.`;

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(fileContent);
});

// System status endpoint
app.get('/api/status', (req, res) => {
    res.json({
        status: 'operational',
        version: '2.0.1',
        uptime: process.uptime(),
        simulationActive: true,
        timestamp: new Date().toISOString()
    });
});

// Fake hacking tools API
app.get('/api/tools', (req, res) => {
    const tools = [
        {
            name: 'Port Scanner v3.0',
            description: 'Advanced network port scanning utility',
            command: 'scan -t 192.168.1.0/24 -p 1-1000',
            simulated: true
        },
        {
            name: 'Firewall Bypass Kit',
            description: 'Toolkit for testing firewall vulnerabilities',
            command: 'bypass --method syn --target <ip>',
            simulated: true
        },
        {
            name: 'Encryption Cracker',
            description: 'Simulated brute-force decryption tool',
            command: 'crack --algo aes256 --file encrypted.dat',
            simulated: true
        },
        {
            name: 'Root Access Toolkit',
            description: 'Simulated privilege escalation tools',
            command: 'rootkit --exploit cve-2024-1234',
            simulated: true
        },
        {
            name: 'Data Extractor Pro',
            description: 'Secure file extraction and transfer',
            command: 'extract --source /secure/ --dest local/',
            simulated: true
        }
    ];
    res.json(tools);
});

// Fake intrusion detection alerts
app.get('/api/alerts', (req, res) => {
    const alerts = [
        {
            id: 'alert_001',
            type: 'SYN Flood',
            severity: 'HIGH',
            source: '192.168.1.100',
            timestamp: new Date(Date.now() - 300000).toISOString(),
            status: 'SIMULATED'
        },
        {
            id: 'alert_002',
            type: 'Unauthorized Access',
            severity: 'CRITICAL',
            source: 'Admin Panel',
            timestamp: new Date(Date.now() - 150000).toISOString(),
            status: 'SIMULATED'
        },
        {
            id: 'alert_003',
            type: 'Data Exfiltration',
            severity: 'HIGH',
            source: 'Secure Server',
            timestamp: new Date().toISOString(),
            status: 'SIMULATED'
        }
    ];
    res.json(alerts);
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔══════════════════════════════════════════════════════╗
    ║                                                      ║
    ║   CYBERSEC SIMULATION v2.0 - Backend Server         ║
    ║                                                      ║
    ║   Server running on port: ${PORT}                   ║
    ║   Access at: http://localhost:${PORT}               ║
    ║                                                      ║
    ║   [!] THIS IS A SIMULATION - NO REAL HACKING [!]    ║
    ║                                                      ║
    ╚══════════════════════════════════════════════════════╝
    
    [INFO] All endpoints are simulated for educational purposes.
    [INFO] No real systems are accessed or compromised.
    `);
});
