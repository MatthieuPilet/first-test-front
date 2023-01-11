import React from 'react';
import { Outlet, Link } from "react-router-dom";

  const TestRoutePage = () => {
    return (
      <>
        <nav>
          Cool tu as fais ton routage
          <Link to="/">Test2</Link>
                                    <Outlet />
        </nav>
      </>
    )
  };

export default TestRoutePage;