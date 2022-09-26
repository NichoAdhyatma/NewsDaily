import { Link } from "@inertiajs/inertia-react";

const Pagination = ({link}) => {
    return (
        <div className="btn-group mt-5 flex justify-center mb-12 sm:mb-0">
            {link.map((link, i) => {
                let active = link.active;
                return (
                    <Link
                        key={i}
                        href={link.url}
                        className={active ? "btn btn-active" : "btn"}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    ></Link>
                );
            })}
        </div>
    );
};

export default Pagination;
