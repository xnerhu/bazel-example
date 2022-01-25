load("//tools/jest:index.bzl", "jest_test")

def test_suite(
        name,
        srcs,
        deps = [],
        env = {},
        coverage = False,
        e2e = False,
        size = "small",
        **kwargs):
    jest_test_name = name + "_jest"
    jest_tags = []

    if coverage:
        jest_tags.extend(["manual"])

    jest_test(
        name = jest_test_name,
        srcs = srcs,
        coverage = coverage,
        e2e = e2e,
        size = size,
        deps = deps,
        env = env,
        tags = jest_tags,
    )
