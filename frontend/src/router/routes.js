import { homeRoutes }     from '~features/home/routes'
import { aboutRoutes }    from '~features/about/routes'
import { contactRoutes }  from '~features/contact/routes'
import { galleryRoutes }  from '~features/gallery/routes'
import { newsRoutes }     from '~features/news/routes'
import { projectsRoutes } from '~features/projects/routes'
import { adminRoutes }    from '~features/admin/routes'

export const routes = [
    ...homeRoutes,
    ...aboutRoutes,
    ...contactRoutes,
    ...galleryRoutes,
    ...newsRoutes,
    ...projectsRoutes,
    ...adminRoutes,
]
