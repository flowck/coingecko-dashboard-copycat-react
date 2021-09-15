import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbLink = styled.span`
  font-size: 11px;
  margin-right: 10px;
  position: relative;
  text-transform: uppercase;

  &:not(:last-child)  {
    a {
      color: #999;
    }

    &::after {
      content: "›";
      color: #999;
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

export function Breadcrumbs() {
  const { pathname } = useLocation();

  const renderPaths = (paths: string) => {
    let path = "";
    const pathList = paths.split("/").filter((item) => item);
    return pathList.map((route) => {
      path += `/${route}`;
      return (
        <BreadcrumbLink key={route}>
          <Link to={`${path}`}>{route}</Link>
        </BreadcrumbLink>
      );
    });
  };

  return <div>{renderPaths(pathname)}</div>;
}
