Access the website here:
https://cliberduche-portfolio.vercel.app/

Run "npm install" after cloning

To run the portfolio use the command "npm run dev"

git fetch --all; git branch -r | ForEach-Object {
    $branch = $_.Trim()
    if ($branch -notmatch '->') {
        $local = $branch -replace 'origin/', ''
        if (-not (git branch --list $local)) {
            git branch --track $local $branch | Out-Null
        }
        git checkout $local
        git pull
    }
}
