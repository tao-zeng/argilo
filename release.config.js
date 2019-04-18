module.exports = {
	branches: [
		'+([1-9])?(.{+([1-9]),x}).x',
		'master',
		{
			name: 'alpha',
			prerelease: true
		}
	],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				releaseRules: [
					{
						type: 'docs',
						scope: 'README',
						release: 'patch'
					},
					{
						type: 'refactor',
						scope: '/core-.*/',
						release: 'minor'
					},
					{
						type: 'refactor',
						release: 'patch'
					}
				],
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
				}
			}
		],
		'@semantic-release/changelog',
		'@semantic-release/release-notes-generator',
		'@semantic-release/npm',
		[
			'@semantic-release/git',
			{
				assets: ['package.json', 'CHANGELOG.md']
			}
		],
		[
			'@semantic-release/github',
			{
				assets: []
			}
		]
	]
}
