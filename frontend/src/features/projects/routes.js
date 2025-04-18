// src/features/projects/routes.js
export const projectsRoutes = [
    {
        path: '/projects',
        component: () => import('./ProjectsLayout.vue'),
        children: [
            {
                path: '',
                name: 'projects',
                component: () => import('./pages/ProjectsView.vue'),
            },
        ],
    },
]
