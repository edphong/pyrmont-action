// src/features/admin/routes.js
export const adminRoutes = [
    {
        path: '/admin',
        component: () => import('./AdminLayout.vue'),
        meta: { requiresAdmin: true },
        children: [
            {
                path: '',
                name: 'admin',
                component: () => import('./pages/AdminView.vue'),
            },
        ],
    },
]
