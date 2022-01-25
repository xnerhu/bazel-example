load("@npm//jest-cli:index.bzl", "jest", _jest_test = "jest_test")
load("//:deps.bzl", "BABEL_BASE_DEPS", "JEST_DEPS")

def jest_test(
        name,
        srcs,
        deps = [],
        env = {},
        jest_config = "//:jest.config.js",
        coverage = False,
        e2e = False,
        size = "small",
        **kwargs):
    templated_args = [
        "--no-cache",
        "--no-watchman",
        "--ci",
        "--colors",
        "--gen_dir=$(GENDIR)",
        "--rule_dir=$(RULEDIR)",
    ]

    if coverage:
        templated_args.extend(["--coverage"])

    templated_args.extend(["--config", "$(rootpath %s)" % jest_config])

    for src in srcs:
        templated_args.extend(["--runTestsByPath", "$(rootpaths %s)" % src])

    test_env = "node"

    data = deps + srcs + [jest_config] + [
        "//:jest-reporter.js",
        "//:babel.config.js",
        "//:tsconfig.json",
    ] + JEST_DEPS + BABEL_BASE_DEPS

    _env = {}
    _env.update(env)

    _env.update({
        "NODE_ENV": "test",
    })

    if e2e:
        _env.update({
            "E2E_ENABLED": "true",
        })

    _jest_test(
        name = name,
        data = data,
        templated_args = templated_args,
        env = _env,
        size = size,
        **kwargs
    )

    jest(
        name = "test_update",
        data = data,
        templated_args = templated_args + ["-u"],
        **kwargs
    )
