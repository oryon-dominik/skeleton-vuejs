#!/usr/bin/env python3
# coding: utf-8
"""typer cli interface to manage the dev-environment"""

import typer
import subprocess
from pathlib import Path

import uvicorn


#----------CONFIG--------------------------------------------------------------
cli = typer.Typer()
CWD = Path().parent.resolve()


#----------HELPER FUNCTIONS----------------------------------------------------
def echo(
    message: str,
    fg_color: str = typer.colors.WHITE,
    bg_color: str = typer.colors.BLACK,
    bold: bool = False
    ):
    """colors:
        "bright_" + black, red, green, yellow, blue, magenta, cyan, white
    """
    typer.echo(
        typer.style(
            message,
            fg=fg_color,
            bg=bg_color,
            bold=bold,
        )
    )

def run_frontend_command(command, cwd='./frontend', env=None, yarn=True, shell=True):
    if yarn:
        command = f"yarn {command}"
    try:
        subprocess.run(command.split(), cwd=cwd, env=env, shell=shell)
    except FileNotFoundError:
        echo(f'The command {command} threw a FileNotFoundError', fg_color=typer.colors.RED)

def delete_folder(path: Path):
    for element in path.iterdir():
        if element.is_dir():
            delete_folder(element)
        else:
            element.unlink()
    path.rmdir()

def clean_build():
    echo(f"Unlinking build-files: build/; dist/ *.egg-info; __pycache__;", fg_color=typer.colors.RED)
    [delete_folder(p) for p in CWD.rglob('build')]
    [delete_folder(p) for p in CWD.rglob('*.egg-info')]
    try:
        [delete_folder(p) for p in CWD.rglob('__pycache__')]
    except FileNotFoundError as err:
        echo(f"Error deleting pycache: {err}", fg_color=typer.colors.RED)
    try:
        [delete_folder(p) for p in CWD.rglob('dist')]
    except OSError as err:
        echo(f"Error deleting dist-folder: {err}", fg_color=typer.colors.RED)

def clean_pyc():
    echo(f"Unlinking caches: *.pyc; *pyo; *~;", fg_color=typer.colors.RED)
    [p.unlink() for p in Path('.').rglob('*.py[co]')]
    [p.unlink() for p in Path('.').rglob('*~')]


#----------GENERAL COMMANDS----------------------------------------------------
@cli.command()
def clean():
    clean_build()
    clean_pyc()


@cli.command()
def up(back: bool = False, front: bool = False):
    "start servers"
    if back:
        backend()
    elif frontend:
        run_frontend_command("dev")
    else:
        echo(f"Please specify backend or frontend. Falling back to frontend", fg_color=typer.colors.RED)
        run_frontend_command("dev")

# ---------- BACKEND -------------------------------------------------
@cli.command()
def backend(
    port: int = 8000,
    host: str = "127.0.0.1",
    log_level: str = "info",
    reload: bool = True,
):  # pragma: no cover
    """
    Run the fastapi backend-API server.
    """
    uvicorn.run(
        "api.application:app",
        host=host,
        port=port,
        log_level=log_level,
        reload=reload,
    )

@cli.command()
def api():
    "starts the fastapi backend-API server"
    backend()

#----------FRONTEND------------------------------------------------------------
@cli.command()
def frontend(build: bool = False, test: bool = False, lint: bool = False):
    """run frontend yarn-commands"""
    if not test and not build and not lint:
        run_frontend_command(f'dev')
    if test:
        run_frontend_command(f'test:unit')
    if lint:
        run_frontend_command(f'lint')
    if build:
        run_frontend_command(f'build')

@cli.command()
def dev():
    """start frontend devserver"""
    run_frontend_command(f'dev')


#----------SKELETON------------------------------------------------------------
if __name__ == "__main__":
    cli()
