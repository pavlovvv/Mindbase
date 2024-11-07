import Pagination from "@mui/material/Pagination";

interface PaginationProps {
  pagesCount: number;
  page: number;
  handlePageChange: (_: React.ChangeEvent<unknown>, value: number) => void;
  isMobile: boolean;
}

export default function DiscoverPagination({
  pagesCount,
  page,
  handlePageChange,
  isMobile,
}: PaginationProps) {
  return (
    <>
      {pagesCount > 1 && (
        <Pagination
          count={pagesCount}
          page={page}
          onChange={handlePageChange}
          shape="rounded"
          siblingCount={!isMobile ? 0 : -1}
          sx={{
            flexBasis: "100%",
            "& .MuiPagination-ul": {
              justifyContent: "center",
              gap: "3px",
            },
            "& .Mui-selected": {
              background: "#25436D !important",
              color: "#D2DADF",
            },
            "&.MuiButtonBase-root": {
              padding: "8px 12px",
              margin: 0,
            },

            ".MuiPagination-ul": {
              flexWrap: "nowrap",
              li: {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                "&:first-of-type": {
                  gap: "8px",
                  "> button::after": {
                    margin: "0 18px",
                    content: !isMobile ? '"Previous"' : '""',
                  },
                },
                "&:last-of-type": {
                  "> button::before": {
                    margin: "0 18px",
                    content: !isMobile ? '"Next"' : '""',
                  },
                },
              },
            },
          }}
        />
      )}
    </>
  );
}
