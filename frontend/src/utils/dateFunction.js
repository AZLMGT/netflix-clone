export function formatReleaseDate(date) {
    return new Date(date).toLocaleDateString("eng-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }