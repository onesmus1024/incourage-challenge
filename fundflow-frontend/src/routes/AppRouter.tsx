import { FC,lazy,Suspense,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AppRoutes = lazy(() => import("./AppRoutes"));


const AppRouter: FC = () => {
  
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AppRoutes />
        </Suspense>
    );
    };

    export default AppRouter;