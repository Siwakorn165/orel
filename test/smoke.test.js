/**
 * Smoke test for n8n community nodes
 * 
 * This test verifies that the built distribution files can be imported
 * without errors, ensuring basic build integrity.
 */

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

describe('Smoke Tests', () => {
	it('should import ExampleNode from dist', () => {
		const exampleNodePath = path.join(__dirname, '..', 'dist', 'nodes', 'ExampleNode', 'ExampleNode.node.js');
		const exampleNode = require(exampleNodePath);
		
		// Verify the export exists and has expected structure
		assert.ok(exampleNode, 'ExampleNode module should export something');
		assert.ok(exampleNode.ExampleNode, 'ExampleNode should export ExampleNode class');
	});

	it('should import HttpBin node from dist', () => {
		const httpBinPath = path.join(__dirname, '..', 'dist', 'nodes', 'HttpBin', 'HttpBin.node.js');
		const httpBin = require(httpBinPath);
		
		// Verify the export exists and has expected structure
		assert.ok(httpBin, 'HttpBin module should export something');
		assert.ok(httpBin.HttpBin, 'HttpBin should export HttpBin class');
	});

	it('should import HttpBinApi credentials from dist', () => {
		const credentialsPath = path.join(__dirname, '..', 'dist', 'credentials', 'HttpBinApi.credentials.js');
		const credentials = require(credentialsPath);
		
		// Verify the export exists and has expected structure
		assert.ok(credentials, 'HttpBinApi credentials module should export something');
		assert.ok(credentials.HttpBinApi, 'HttpBinApi should export HttpBinApi class');
	});
});
